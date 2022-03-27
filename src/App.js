import {useEffect, useState} from "react";
import './App.css';
import {ReactComponent as SvgMap} from './assets/automatika.svg';

const mapTitles = new Map();
mapTitles.set(1, "First title first title")
         .set(2, "Second title second title")
         .set(3, "Third title third title")
         .set(4, "Fourth title fourth title")
         .set(5, "Fifth title fifth title")
         .set(6, "Sixth title sixth title")
         .set(7, "Seventh title seventh title")
         .set(8, "Eighth title eight title")
         .set(9, "Nineth title nineth title");

const App = () =>  {
    const [selectedTitle, setSelectedTitle] = useState({
        id: 1,
        title: mapTitles.get(1)
    })

    const clearActiveTitles = (svgTitles) => {
        for(let svgTitle of svgTitles) {
            svgTitle.classList.remove("roadmap-title-active");
        }
    }

    useEffect(() => {
        const handleSvgClick = (event) => {
            const svgElem = document.getElementById("automatika-roadmap");
            const svgTitles = svgElem.querySelectorAll(".roadmap-title");
            for(let svgTitle of svgTitles) {
                svgTitle.addEventListener("click", event => {
                    // Clear all active titles
                    clearActiveTitles(svgTitles);
                    svgTitle.classList.add("roadmap-title-active");

                    const [_ignore, _ignore2, id] = svgTitle.dataset.value.split("-");
                    setSelectedTitle({
                        id: parseInt(id),
                        title: mapTitles.get(parseInt(id)),
                    })
                }, false)
            }

        }

        handleSvgClick();
    }, []);

  return (
    <div className="app container">
        <SvgMap />
        <div>
            <h1 className="title">
                {selectedTitle.title}
            </h1>
        </div>
    </div>
  );
}

export default App;
