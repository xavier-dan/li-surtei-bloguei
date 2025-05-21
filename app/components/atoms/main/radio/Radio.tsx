import { RadioProps } from "@/app/types/interfaces/interfaces";

const Radio = ({ label, options, error, ...props }: RadioProps) => (
    <div>
        {label && <p className="block text-sm font-medium text-black mb-1">{label}</p>}
        <div className="flex gap-4">
            {options.map((option) => (
                <label key={option.value} className="text-sm flex items-center gap-1">
                    <input
                        type="radio"
                        value={option.value}
                        {...props}
                        className="accent-[var(--secondary-color)]"
                    />
                    {option.label}
                </label>
            ))}
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
);

export default Radio;