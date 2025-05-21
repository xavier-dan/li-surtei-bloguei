import { TextAreaProps } from "@/app/types/interfaces/interfaces";

const Textarea = ({ label, error, ...props }: TextAreaProps) => (
  <div>
    {label && <label className="block text-sm font-medium text-black mb-1">{label}</label>}
    <textarea
      {...props}
      className={`border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-300' : 'border-[var(--form-color)] focus:ring-black-700'
        }`}
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

export default Textarea;
