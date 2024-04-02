import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  textOpen?: string;
  textClose?: string;
  minHeight?: number;
}

const ReadMore = ({
  children,
  textClose = 'Leer más',
  textOpen = 'Leer menos',
  minHeight = 70,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef) {
      const elementHeight = divRef.current?.clientHeight;
      setHeight(elementHeight || 0);
    }
  }, [divRef]);

  return (
    <div className="overflow-hidden">
      <div
        style={{
          height: isOpen ? `${height}px` : `${minHeight}px`,
        }}
        className={`duration-500 ease-in-out overflow-hidden relative`}
      >
        <div ref={divRef}> {children}</div>
        {!isOpen && (
          <div className="bg-[linear-gradient(to_top,_rgba(255,_255,_255,_1),_rgba(255,_255,_255,_0))] w-full h-14 absolute bottom-0 left-0"></div>
        )}
      </div>
      <button
        className="underline text-anc-primary text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? textOpen : textClose}
      </button>
    </div>
  );
};

export default ReadMore;
