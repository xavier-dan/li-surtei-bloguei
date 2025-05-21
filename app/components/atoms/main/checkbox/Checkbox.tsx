import { FieldProps } from "@/app/types/interfaces/interfaces";

const Checkbox = ({ label, error, ...props }: FieldProps) => (
    <div className="flex items-start gap-2">
        <input type="checkbox" {...props} className="mt-1" />
        <div>
            <label className="text-sm text-gray-700">{label}</label>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    </div>
);

export default Checkbox;