import { TfiInstagram, TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";
const SocialMediaIcons = () => {
    //social medias
    const instagramLink = `https://www.instagram.com/irahulks/`;
    const gitHubLink = `https://github.com/irahulkumar1`;
    const twitterLink = `https://twitter.com/irahulkv`;
    const linkedInLink = `https://www.linkedin.com/in/irahulkv/`;
    return <>
        <ul className='flex gap-6'>
            <li className='cursor-pointer'>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer"> <TfiInstagram /></a>
            </li>
            <li className='cursor-pointer'>
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer"> <TfiGithub /></a>
            </li>
            <li className='cursor-pointer'>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer"> <TfiLinkedin /></a>
            </li>
            <li className='cursor-pointer'>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer"> <TfiTwitter /></a>
            </li>
        </ul>
    </>
}
export default SocialMediaIcons