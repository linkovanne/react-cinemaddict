import type {ReactNode} from "react";
import './ControlsItem.css'

interface ControlsItemProps {
    children?: ReactNode;
    name: string;
    active?: boolean;
    width?: number;
    height?: number;
    viewBox?: string;
    stroke?: string;
}

const ControlsItem = ({children, name, active = false, width = 16, height = 16, viewBox = '0 0 16 16', stroke = undefined}: ControlsItemProps) => {
    return (
        <button className="controls-item" type="button">
            <svg fill={active ? '#ffe800' : '#7C7C7C'} stroke={stroke} height={height} width={width} view-box={viewBox} aria-hidden={true}>
                <symbol id="watchlist" viewBox="0 0 14 10">
                    <g fillRule="nonzero">
                        <path d="M3 3V0h1v3h3v1H4v3H3V4H0V3h3zm4 3h10v1H7V6zM3 10h14v1H3zM3 14h14v1H3z"/>
                    </g>
                </symbol>
                <symbol id="watched" viewBox="0 0 17 15">
                    <path fillRule="nonzero" d="M12.96 0l.794.607-7.227 9.458L0 3.433l.713-.702 5.719 5.811z"/>
                </symbol>
                <symbol id="favorite" viewBox="0 0 18 18">
                    <path fillRule="nonzero" d="M9 13.435l4.038 2.123-.771-4.496 3.267-3.185-4.515-.656L9 3.13 6.98 7.22l-4.514.657 3.267 3.185-.771 4.496L9 13.435zm-5.366 3.951l1.025-5.975L.317 7.179l6-.872L9 .87l2.683 5.437 6 .872-4.342 4.232 1.025 5.975L9 14.565l-5.366 2.821z"/>
                </symbol>
            <use href={`#${name}`} />
        </svg>
            {children}
        </button>
    );
};

export default ControlsItem;
