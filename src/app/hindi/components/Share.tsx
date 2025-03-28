"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  shareText: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  shareUrl,
  shareText,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    try {
      // Check if the clipboard API is available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } else {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          textArea.remove();
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        } catch (error) {
          console.error("Fallback: Oops, unable to copy", error);
          textArea.remove();
        }
      }
    } catch (error) {
      console.error("Failed to copy:", error);
      // If all else fails, prompt user to copy manually
      window.prompt("Copy the link below:", shareUrl);
    }
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${shareUrl}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(facebookUrl, "_blank");
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">शेयर</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 mb-6">{shareText}</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleWhatsAppShare}
            className="flex items-center justify-center gap-2 p-3 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <span className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 509 511.514"
              >
                <path
                  fill="#fff"
                  d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={handleFacebookShare}
            className="flex items-center justify-center gap-2 p-3 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <span className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 510.125"
              >
                <path
                  fill="#fff"
                  fill-rule="nonzero"
                  d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 120.059 82.652 220.797 194.157 248.461V334.229h-52.79V256h52.79v-33.709c0-87.134 39.432-127.521 124.977-127.521 16.218 0 44.202 3.18 55.651 6.36v70.916c-6.042-.635-16.537-.954-29.575-.954-41.977 0-58.196 15.901-58.196 57.241V256h83.619l-14.365 78.229h-69.254v175.896C413.771 494.815 512 386.885 512 256z"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={handleTwitterShare}
            className="flex items-center justify-center gap-2 p-3 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#FFFFFF"
                d="M23.643 4.937c-.88.389-1.83.651-2.828.768 1.017-.61 1.795-1.574 2.164-2.724-.951.565-2.006.976-3.12 1.199-.894-.951-2.179-1.544-3.59-1.544-2.716 0-4.92 2.189-4.92 4.892 0 .384.042.76.126 1.118-4.092-.205-7.715-2.164-10.15-5.144-.424.72-.666 1.56-.666 2.463 0 1.7.868 3.19 2.19 4.062-.807-.025-1.568-.246-2.229-.615v.062c0 2.375 1.688 4.362 3.922 4.815-.411.111-.844.171-1.282.171-.314 0-.623-.031-.93-.089.63 1.959 2.453 3.382 4.604 3.422-1.692 1.322-3.823 2.113-6.149 2.113-.4 0-.797-.024-1.187-.07 2.212 1.413 4.834 2.236 7.669 2.236 9.213 0 14.256-7.64 14.256-14.256 0-.22-.005-.44-.015-.66.977-.71 1.822-1.597 2.486-2.605z"
              />
            </svg>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 p-3 bg-gray-800 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default function ShareSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shareUrl = "https://intily.com/pnthn";
  const shareText =
    "पिंट्यूड के बारे में प्रचार करें!\nइसे अपने दोस्तों और परिवार के साथ शेयर करें और इसके अद्भुत लाभों को खोजने में उनकी मदद करें।\n";

    const onClick = () => {
      setIsModalOpen(true);
    };
  return (
    <>
    <div className="md:h-[32.875rem] w-full bg-[#DCE35B] h-[12.4375rem] md:px-[13.3125rem] px-[2.46875rem] flex items-center justify-center">
      <div className="w-full  md:h-[24.0625rem] h-[9.5rem] md:gap-5">
        <div className="w-full text-center">
          <div className="h-[3.25rem] md:h-[10.3125rem]">
            <h1 className="text-black font-bold text-[0.875rem] md:text-[2.75rem]">
              आपका नेटवर्क भी पिंट्यूड का हिस्सा बन सकता है,
              <br />
              <span className="block">अभी शेयर करें!</span>
            </h1>
          </div>
          <div className="w-[16.688rem] h-[2.25rem] md:w-[44.5625rem] md:h-[5.8125rem] mx-auto">
            <p className="font-normal text-[0.69rem] md:text-[1.75rem] m-0 p-0">
              अपने दोस्तों और परिवार को पिंट्यूड के बारे में बताएं,
              <br />
              <span className="block">
                और उनके व्यवसाय को नई ऊंचाइयों तक पहुंचाने में मदद करें!
              </span>
            </p>
          </div>
        </div>

        <div className="justify-self-center mt-3">
          <button
            type="button"
            className="group relative overflow-hidden w-[7.875rem] h-[2.5rem] md:w-[16.438rem] md:h-[5.625rem] bg-[#FF5E62] rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5E62] active:scale-95"
            onClick={onClick}
            aria-label="Share Now"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-white opacity-0 group-hover:opacity-10" />
            <span className="relative text-white font-semibold text-[0.875rem] md:text-[1.5rem] md:font-bold flex items-center justify-center gap-2">
              <svg
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-[34px] md:h-[32px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                aria-hidden="true"
              >
                <title>Share Icon</title>
                <path
                  d="M23.4158 22.3005L33.6095 12.2745L33.7387 12.1272C33.9286 11.8698 34.02 11.5529 33.9963 11.234C33.9726 10.915 33.8354 10.6151 33.6095 10.3886L23.4158 0.367174L23.2753 0.247035C22.4592 -0.364994 21.2578 0.224368 21.2578 1.31015V6.13839L20.7478 6.17239C12.6713 6.81162 7.94052 11.9232 6.81166 21.1943C6.66659 22.3844 8.03119 23.1301 8.91523 22.3413C12.159 19.4444 15.5115 17.6445 18.991 16.9237C19.5487 16.8073 20.1093 16.7189 20.673 16.6585L21.2578 16.6064V21.3575L21.2692 21.5434C21.4052 22.5702 22.6496 23.0531 23.4158 22.3005ZM20.9133 8.43236L23.5246 8.25782V3.64947L31.3359 11.3293L23.5246 19.0137V14.1242L20.4509 14.4008H20.4327C16.5724 14.8156 12.9297 16.3615 9.49099 18.9389C10.1665 15.9037 11.3203 13.621 12.8368 11.9867C14.7182 9.9579 17.3476 8.71798 20.9133 8.43236ZM5.66694 2.26673C4.16397 2.26673 2.72257 2.86378 1.65981 3.92654C0.597051 4.9893 0 6.43071 0 7.93367V26.0679C0 27.5708 0.597051 29.0123 1.65981 30.075C2.72257 31.1378 4.16397 31.7348 5.66694 31.7348H23.8011C25.3041 31.7348 26.7455 31.1378 27.8083 30.075C28.871 29.0123 29.4681 27.5708 29.4681 26.0679V23.8011C29.4681 23.5005 29.3487 23.2122 29.1361 22.9997C28.9236 22.7871 28.6353 22.6677 28.3347 22.6677C28.0341 22.6677 27.7458 22.7871 27.5333 22.9997C27.3207 23.2122 27.2013 23.5005 27.2013 23.8011V26.0679C27.2013 26.9697 26.8431 27.8345 26.2054 28.4722C25.5678 29.1098 24.7029 29.468 23.8011 29.468H5.66694C4.76516 29.468 3.90031 29.1098 3.26266 28.4722C2.62501 27.8345 2.26678 26.9697 2.26678 26.0679V7.93367C2.26678 7.03189 2.62501 6.16705 3.26266 5.52939C3.90031 4.89174 4.76516 4.53351 5.66694 4.53351H12.4673C12.7679 4.53351 13.0561 4.4141 13.2687 4.20155C13.4812 3.98899 13.6007 3.70071 13.6007 3.40012C13.6007 3.09953 13.4812 2.81125 13.2687 2.59869C13.0561 2.38614 12.7679 2.26673 12.4673 2.26673H5.66694Z"
                  fill="currentColor"
                />
              </svg>
              <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                अभी शेयर करें
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
      <ShareModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      shareUrl={shareUrl}
      shareText={shareText}
    />
    </>
  );
}
