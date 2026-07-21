import review1 from "../../../assets/Images/Reviews/Group 53.svg";
import review2 from "../../../assets/Images/Reviews/Group 54.svg";
import review3 from "../../../assets/Images/Reviews/Group 55.svg";

import rating from "../../../assets/Images/Reviews/Rectangle 62.svg";

import leftArrow from "../../../assets/Icons/reviewsIcon/Group 56.svg";
import rightArrow from "../../../assets/Icons/reviewsIcon/Group 57.svg";

const ReviewsSection = () => {
  return (
    <section className="w-full mt-20">

      <div
        className="
          relative
          max-w-[1728px]
          h-[600px]
          mx-auto
          bg-[#D9D9D9]
          overflow-visible
        "
      >

        {/* Header */}

        <div className="flex justify-between items-center px-20 pt-16">

          <h2 className="text-[44px] font-bold text-[#03081F]">
            Customer Reviews
          </h2>

          <div className="flex gap-4">
            <img
              src={rightArrow}
              className="w-[75px] h-[75px] cursor-pointer"
              alt=""
            />

            <img
              src={leftArrow}
              className="w-[75px] h-[75px] cursor-pointer"
              alt=""
            />

          </div>

        </div>

        {/* Review Cards */}

        <div className="flex justify-center gap-8 mt-12 px-10">

          <img
            src={review1}
            alt=""
            className="w-[496px] h-[274px]"
          />

          <img
            src={review2}
            alt=""
            className="w-[496px] h-[274px]"
          />

          <img
            src={review3}
            alt=""
            className="w-[496px] h-[274px]"
          />

        </div>

        {/* Rating */}

        <img
          src={rating}
          alt=""
          className="
            absolute
            left-1/2
            bottom-[-90px]
            -translate-x-1/2
            w-[153px]
            h-[178px]
          "
        />

      </div>

    </section>
  );
};

export default ReviewsSection;