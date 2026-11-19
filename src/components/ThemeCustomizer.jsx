
import { useEffect, useState } from "react";
import { Settings2, X } from "lucide-react";

const themes = {
    navy: "#123B63",
    teal: "#167D8D",
    brown: "#654321",
    terracotta: "#d1b68d",
};

export default function ThemeCustomizer() {
    const [open, setOpen] = useState(false);

    const [color, setColor] = useState(() => {
        const savedColor = localStorage.getItem("bexon-color");

        return Object.hasOwn(themes, savedColor)
            ? savedColor
            : "brown";
    });

    const [layout, setLayout] = useState(
        () => localStorage.getItem("bexon-layout") || "original"
    );

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--accent",
            themes[color] || themes.navy
        );
        localStorage.setItem("bexon-color", color);
    }, [color]);

    useEffect(() => {
        document.documentElement.dataset.layout = layout;
        localStorage.setItem("bexon-layout", layout);
    }, [layout]);

    return (
        <div className="theme-customizer">
            <button
                className="theme-toggle"
                onClick={() => setOpen(!open)}
                aria-label="Customize website theme"
                aria-expanded={open}
            >
                <Settings2 size={22} />
            </button>

            {open && (
                <div className="theme-panel">
                    <div className="theme-panel-header">
                        <h3>Theme Settings</h3>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close settings"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <p>Color Theme</p>

                    <div className="theme-colors">
                        {Object.entries(themes).map(([name, hex]) => (
                            <button
                                key={name}
                                title={name}
                                aria-label={`${name} color theme`}
                                aria-pressed={color === name}
                                className={color === name ? "selected" : ""}
                                style={{ backgroundColor: hex }}
                                onClick={() => setColor(name)}
                            />
                        ))}
                    </div>

                    <label htmlFor="homepage-layout">
                        Homepage Layout
                    </label>

                    <select
                        id="homepage-layout"
                        value={layout}
                        onChange={(e) => setLayout(e.target.value)}
                    >
                        <option value="original">Original</option>
                        <option value="split">Split</option>
                        <option value="centered">Centered</option>
                    </select>

                    <button
                        className="reset-theme"
                        onClick={() => {
                            setColor("brown");
                            setLayout("original");
                        }}
                    >
                        Reset to Default
                    </button>
                </div>
            )}
        </div>
    );
}
