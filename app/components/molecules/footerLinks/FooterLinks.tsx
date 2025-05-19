import { FaInstagram, FaTiktok, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Icons from '../../atoms/footer/icons/Icons';

export default function FooterLinks() {
    return (
        <div className='flex gap-4 mt-4 mx-4'>
            <Icons href="#" icon={FaInstagram} size={18} label="Instagram" />
            <Icons href="#" icon={FaTiktok} size={18} label="Tiktok" />
            <Icons href="#" icon={FaTwitter} size={18} label="Twitter" />
            <Icons href="#" icon={FaLinkedinIn} size={18} label="Linkedin" />
        </div>
    );
}