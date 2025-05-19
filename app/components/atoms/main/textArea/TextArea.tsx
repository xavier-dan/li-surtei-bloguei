import { TextAreaProps } from "@/app/types/types/types";

export default function Textarea({placeholder, className, onChange, value, name}: TextAreaProps) {
  return (
    <div className="flex flex-col mb-4">
      <textarea
        placeholder={placeholder}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        className={`border border-[var(--form-color)] px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] resize-none ${className}`}
      />
    </div>
  );
}
