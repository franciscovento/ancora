import React, { useEffect, useRef, useState } from 'react';

interface Props {
  questions: { title: string; content: string }[];
}
const Accordion = ({ questions }: Props) => {
  const [item, setItem] = useState(0);

  const selectItem = (index: number) => {
    if (index === item) return setItem(-1);
    setItem(index);
  };

  return (
    <div className="py-8">
      {questions.map((question, index) => {
        return (
          <div key={index} className={'border-b border-b-anc-secondary py-8'}>
            <AccordionItem
              isOpen={index === item}
              setItem={() => selectItem(index)}
              title={question.title}
            >
              <div dangerouslySetInnerHTML={{ __html: question.content }} />
            </AccordionItem>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

interface ItemProps {
  isOpen: boolean;
  setItem: () => void;
  title: string;
  children: React.ReactNode;
}

export const AccordionItem = ({
  children,
  isOpen,
  setItem,
  title,
}: ItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (itemRef && itemRef.current) {
      setHeight(itemRef.current.clientHeight);
    }
  }, [itemRef]);

  return (
    <div className="overflow-hidden">
      <h3
        onClick={setItem}
        className={`cursor-pointer select-none font-semibold text-base sm:text-lg uppercase font-sans flex justify-between items-center ${
          isOpen ? 'text-anc-primary' : 'text-anc-secondary'
        }`}
      >
        <span className="flex gap-2">
          <svg
            className={'block flex-shrink-0 pt-2'}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M9.62493 4.97613C9.4082 4.78274 9.23488 4.54565 9.11638 4.28045C8.99789 4.01525 8.9369 3.72797 8.93743 3.4375C8.93743 2.29625 9.85868 1.375 10.9999 1.375C12.1412 1.375 13.0624 2.29625 13.0624 3.4375C13.0624 4.04938 12.7977 4.59938 12.3749 4.97613V6.875H14.7812C15.3518 6.875 15.8124 7.33563 15.8124 7.90625C15.8124 8.47687 15.3518 8.9375 14.7812 8.9375H12.3749V18.4085C13.269 18.2034 14.1064 17.8025 14.8269 17.2347C15.5473 16.6669 16.1328 15.9464 16.5412 15.125H16.5137C15.9156 15.125 15.5924 14.4237 15.9843 13.97L18.3149 11.2475C18.7068 10.7869 19.4562 11.0069 19.5387 11.605L19.9306 14.3275C19.9924 14.7469 19.6624 15.125 19.2362 15.125H18.7756C17.6481 18.3288 14.5956 20.625 10.9999 20.625C7.40431 20.625 4.35181 18.3288 3.22431 15.125H2.76368C2.33743 15.125 2.00743 14.7469 2.06931 14.3275L2.46118 11.605C2.54368 11.0069 3.29306 10.7869 3.68493 11.2475L6.01556 13.97C6.40743 14.4237 6.08431 15.125 5.48618 15.125H5.45868C5.86713 15.9463 6.45266 16.6668 7.17309 17.2346C7.89351 17.8024 8.7309 18.2033 9.62493 18.4085V8.9375H7.21868C6.64806 8.9375 6.18743 8.47687 6.18743 7.90625C6.18743 7.33563 6.64806 6.875 7.21868 6.875H9.62493V4.97613ZM10.9999 2.75C10.6218 2.75 10.3124 3.05938 10.3124 3.4375C10.3124 3.81562 10.6218 4.125 10.9999 4.125C11.3781 4.125 11.6874 3.81562 11.6874 3.4375C11.6874 3.05938 11.3781 2.75 10.9999 2.75Z"
              fill={isOpen ? '#9D192C' : '#0C2339'}
            />
          </svg>
          {title}
        </span>
        {isOpen ? (
          <svg
            className={'block flex-shrink-0'}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M19 13.498H13V13.5H11V13.498H5V11.498H11V11.5H13V11.498H19V13.498Z"
              fill="#9D192C"
            />
          </svg>
        ) : (
          <svg
            className={'block flex-shrink-0'}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
              fill="#0C2339"
            />
          </svg>
        )}
      </h3>
      <div
        style={{
          height: isOpen ? `${height}px` : `0px`,
        }}
        className="transition-all duration-500 ease-in-out"
      >
        <div
          className={'pt-4 ml-8'}
          ref={itemRef}
          // dangerouslySetInnerHTML={{ __html: children as string }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
