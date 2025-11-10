import React from 'react';

interface ChannelLogoProps {
  channelId: string;
  className?: string;
}

const ExpediaLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Expedia</title>
        <path fill="currentColor" d="M13.433 2.445c-2.31 0-4.184 1.875-4.184 4.185 0 2.31 1.874 4.185 4.184 4.185s4.185-1.875 4.185-4.185c0-2.31-1.875-4.185-4.185-4.185zm-1.803.882a.89.89 0 00-.89.891v4.823c0 .49.399.89.89.89h3.605a.89.89 0 00.89-.89V4.218a.89.89 0 00-.89-.891h-3.605zm5.955 4.414l6.23 8.36-4.57 3.407-6.23-8.36 4.57-3.407zm-11.91 0l-6.23 8.36 4.57 3.407 6.23-8.36-4.57-3.407z"/>
    </svg>
);

const AgodaLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Agoda</title>
        <path fill="currentColor" d="M12 0a12 12 0 1 0 0 24A12 12 0 0 0 12 0zm-1.53 18.252h3.06L12 12.876l-1.53 5.376zm-.51-6.12L12 5.748l2.04 6.384H9.96z"/>
    </svg>
);

const HostelworldLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Hostelworld</title>
        <path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.59c.773 0 1.4.627 1.4 1.4s-.627 1.4-1.4 1.4-1.4-.627-1.4-1.4.627-1.4 1.4-1.4zm-4.32 3.193c.773 0 1.4.627 1.4 1.4s-.627 1.4-1.4 1.4S6.28 9.356 6.28 8.583s.627-1.4 1.4-1.4zm8.64 0c.773 0 1.4.627 1.4 1.4s-.627 1.4-1.4 1.4-1.4-.627-1.4-1.4.627-1.4 1.4-1.4zm-10.73 3.63c.773 0 1.4.627 1.4 1.4s-.627 1.4-1.4 1.4S3.19 14.226 3.19 13.453s.627-1.4 1.4-1.4zm12.82 0c.773 0 1.4.627 1.4 1.4s-.627 1.4-1.4 1.4-1.4-.627-1.4-1.4.627-1.4 1.4-1.4zM12 13.63a3.593 3.593 0 0 0-3.59 3.59c0 .248.026.49.076.726h7.028c.05-.236.076-.478.076-.726a3.593 3.593 0 0 0-3.59-3.59zm-2.09 5.86a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm4.18 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
    </svg>
);

const CustomChannelLogo: React.FC<ChannelLogoProps> = ({ channelId, className }) => {
    switch (channelId) {
        case 'expedia':
            return <ExpediaLogo className={className} />;
        case 'agoda':
            return <AgodaLogo className={className} />;
        case 'hostelworld':
            return <HostelworldLogo className={className} />;
        default:
            return null;
    }
};

export default CustomChannelLogo;
