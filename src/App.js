import Review from "./Review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

function App() {
  const [CurrentItem, setCurrentItem] = useState(0);

  const handleNextClick = useCallback(() => {
    setCurrentItem(CurrentItem + 1);

    if (CurrentItem === reviews.length - 1) {
      setCurrentItem(0);
    }
  }, [CurrentItem]);

  const handlePrevClick = useCallback(() => {
    setCurrentItem(CurrentItem - 1);

    if (CurrentItem === 0) {
      setCurrentItem(reviews.length - 1);
    }
  }, [CurrentItem]);

  const item = reviews[CurrentItem];

  return (
    <div className="App">
      <main className="container">
        <section className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </section>

        <section className="review-container">
          <Review
            id={item.id}
            key={item.id}
            name={item.name}
            job={item.job}
            text={item.text}
            img={item.img}
          />

          <div className="icons-container">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="prev-btn"
              onClick={handlePrevClick}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="next-btn"
              onClick={handleNextClick}
            />
          </div>

          <button className="btn">Surprise Me</button>
        </section>
      </main>
    </div>
  );
}

export default App;
