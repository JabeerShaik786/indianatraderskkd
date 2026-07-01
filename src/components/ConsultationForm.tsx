'use client';

import { useState } from 'react';
import { Send, MessageSquare, CheckCircle2, ChevronDown } from 'lucide-react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIFhL8gnZi3xSBfZ6mDqUjWD5qvodsIV3pQd6rJui4lhX6e-GagtO-YNq6JZBNl7yL/exec";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    projectType: '',
    budget: '',
    details: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const getLabelClass = (fieldName: keyof typeof formData) => {
    const hasValue = !!formData[fieldName];
    const isFocused = focusedField === fieldName;
    return `absolute left-4 transition-all duration-200 pointer-events-none font-headings ${
      isFocused || hasValue
        ? 'top-2 text-[#01497C] text-[10px]'
        : 'top-4 text-[#6B7280] text-sm'
    }`;
  };

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const projectTypes = [
    'Container Home',
    'Modular Office',
    'Portable Site Office',
    'Storage Container',
    'Container Café',
    'Custom Container Structure',
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5 Lakhs - ₹10 Lakhs',
    '₹10 Lakhs - ₹20 Lakhs',
    '₹20 Lakhs +',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          location: formData.location.trim(),
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.details.trim()
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.json();
      if (result.status === 'success') {
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          location: '',
          projectType: '',
          budget: '',
          details: '',
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError(err.message || 'Unable to submit details. Please try again or use WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppConsult = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '919491632123'; // Realistic phone number placeholder for Kakinada
    
    const isEmpty = !formData.name.trim() && 
                    !formData.phone.trim() && 
                    !formData.location.trim() && 
                    !formData.projectType && 
                    !formData.budget && 
                    !formData.details.trim();

    let text = '';
    if (isEmpty) {
      text = "Hello, I'm interested in your container solutions. I would like to know more.";
    } else {
      text = `Hello Indiana Traders,\n\nI would like to get a consultation for my project.\n`;
      if (formData.name.trim()) text += `\n*Name:* ${formData.name.trim()}`;
      if (formData.phone.trim()) text += `\n*Phone:* ${formData.phone.trim()}`;
      if (formData.location.trim()) text += `\n*Location:* ${formData.location.trim()}`;
      if (formData.projectType) text += `\n*Project Type:* ${formData.projectType}`;
      if (formData.budget) text += `\n*Budget:* ${formData.budget}`;
      if (formData.details.trim()) text += `\n*Details:* ${formData.details.trim()}`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-[rgba(1,42,74,0.08)] p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
        <CheckCircle2 className="text-[#22C55E] w-16 h-16 mb-6" />
        <h3 className="font-headings text-2xl md:text-3xl font-bold text-[#012A4A] mb-3">
          Enquiry Submitted Successfully
        </h3>
        <p className="text-[#6B7280] text-sm md:text-base max-w-md mx-auto mb-8">
          Thank you! Your project details have been submitted successfully.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setSubmitError(null);
            setFormData({
              name: '',
              phone: '',
              location: '',
              projectType: '',
              budget: '',
              details: '',
            });
          }}
          className="inline-flex items-center justify-center px-6 py-3 border border-[#01497C] text-[16px] font-semibold tracking-[0.02em] text-[#01497C] bg-white hover:bg-[#01497C] hover:text-white transition-all duration-300 font-headings"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="bg-white border border-[rgba(1,42,74,0.08)] p-8 md:p-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              onChange={handleInputChange}
              placeholder=" "
              className={`w-full px-4 pt-6 pb-2 border rounded-[10px] text-sm bg-[#F8FBFD] text-[#012A4A] focus:outline-none focus:border-[#01497C] focus:ring-1 focus:ring-[#01497C]/25 transition-all duration-300 ${
                errors.name ? 'border-red-500' : 'border-[rgba(1,42,74,0.12)]'
              }`}
            />
            <label htmlFor="name" className={getLabelClass('name')}>
              Your Name *
            </label>
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              onChange={handleInputChange}
              placeholder=" "
              className={`w-full px-4 pt-6 pb-2 border rounded-[10px] text-sm bg-[#F8FBFD] text-[#012A4A] focus:outline-none focus:border-[#01497C] focus:ring-1 focus:ring-[#01497C]/25 transition-all duration-300 ${
                errors.phone ? 'border-red-500' : 'border-[rgba(1,42,74,0.12)]'
              }`}
            />
            <label htmlFor="phone" className={getLabelClass('phone')}>
              Phone Number (WhatsApp) *
            </label>
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location */}
        <div>
          <div className="relative">
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onFocus={() => setFocusedField('location')}
              onBlur={() => setFocusedField(null)}
              onChange={handleInputChange}
              placeholder=" "
              className={`w-full px-4 pt-6 pb-2 border rounded-[10px] text-sm bg-[#F8FBFD] text-[#012A4A] focus:outline-none focus:border-[#01497C] focus:ring-1 focus:ring-[#01497C]/25 transition-all duration-300 ${
                errors.location ? 'border-red-500' : 'border-[rgba(1,42,74,0.12)]'
              }`}
            />
            <label htmlFor="location" className={getLabelClass('location')}>
              Project Location (City/Town) *
            </label>
          </div>
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>

        {/* Project Type */}
        <div>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onFocus={() => setFocusedField('projectType')}
              onBlur={() => setFocusedField(null)}
              onChange={handleInputChange}
              className={`w-full px-4 pt-6 pb-2 border rounded-[10px] text-sm bg-[#F8FBFD] text-[#012A4A] focus:outline-none focus:border-[#01497C] focus:ring-1 focus:ring-[#01497C]/25 transition-all duration-300 appearance-none ${
                errors.projectType ? 'border-red-500' : 'border-[rgba(1,42,74,0.12)]'
              }`}
            >
              <option value="" disabled hidden></option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <label htmlFor="projectType" className={getLabelClass('projectType')}>
              Project Type *
            </label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]">
              <ChevronDown size={16} />
            </div>
          </div>
          {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-[#012A4A] mb-2 font-headings">
          Estimated Budget Range
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {budgetRanges.map((range) => (
            <label
              key={range}
              className={`border p-3 text-center cursor-pointer select-none text-xs transition-all ${
                formData.budget === range
                  ? 'border-[#01497C] bg-[#01497C]/5 text-[#012A4A] font-semibold'
                  : 'border-[rgba(1,42,74,0.12)] bg-[#F8FBFD] text-[#6B7280] hover:border-[#2A6F97]'
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={range}
                checked={formData.budget === range}
                onChange={handleInputChange}
                className="sr-only"
              />
              {range}
            </label>
          ))}
        </div>
        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
      </div>

      {/* Details */}
      <div>
        <div className="relative">
          <textarea
            id="details"
            name="details"
            rows={4}
            value={formData.details}
            onFocus={() => setFocusedField('details')}
            onBlur={() => setFocusedField(null)}
            onChange={handleInputChange}
            placeholder=" "
            className="w-full px-4 pt-6 pb-2 border border-[rgba(1,42,74,0.12)] rounded-[10px] text-sm bg-[#F8FBFD] text-[#012A4A] focus:outline-none focus:border-[#01497C] focus:ring-1 focus:ring-[#01497C]/25 transition-all duration-300 resize-y"
          />
          <label htmlFor="details" className={getLabelClass('details')}>
            Project Details / Specific Requirements (Optional)
          </label>
        </div>
      </div>

      {submitError && (
        <div className="p-4 border border-red-200 bg-red-50 text-red-700 rounded-[10px] text-xs font-semibold">
          {submitError}
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <button
          type="button"
          onClick={handleSubmitQuote}
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#01497C] text-white hover:bg-[#013A63] hover:-translate-y-[2px] hover:shadow-md active:scale-[0.98] transition-all duration-150 text-[16px] font-semibold tracking-[0.02em] font-headings disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <Send size={14} />
              <span>Submit Details</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppConsult}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/8 hover:border-[#128C7E] hover:text-[#128C7E] hover:-translate-y-[2px] hover:shadow-md active:scale-[0.98] transition-all duration-150 text-[16px] font-semibold tracking-[0.02em] font-headings"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] shrink-0 transition-transform duration-150"
            fill="#25D366"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.99S14.64 1.252 12.008 1.252c-5.441 0-9.866 4.42-9.869 9.866-.001 1.77.463 3.498 1.345 5.021l-.98 3.586 3.673-.963zm10.702-6.559c-.299-.15-1.77-.874-2.043-.973-.274-.099-.474-.149-.673.15-.198.298-.77.973-.943 1.171-.173.199-.347.223-.646.074-.299-.15-1.265-.466-2.41-1.484-.89-.793-1.49-1.772-1.664-2.07-.173-.299-.018-.46.131-.609.135-.133.298-.347.447-.521.15-.173.199-.298.298-.497.1-.198.05-.371-.025-.521-.075-.15-.673-1.62-.922-2.206-.24-.58-.485-.5-.673-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.77-.724 2.02-1.424.248-.699.248-1.299.173-1.424-.075-.124-.272-.198-.57-.347z" />
          </svg>
          <span>WhatsApp Consultation</span>
        </button>
      </div>
    </form>
  );
}
