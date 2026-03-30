import React, {useState, useEffect} from 'react';

const Slider = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideCount = React.Children.count(children);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [slideCount]);

    return (
        <div className="image-slider">
            <ul style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => (
                    <li key={index}>
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Slider;