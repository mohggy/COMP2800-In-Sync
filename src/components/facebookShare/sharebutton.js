import React from "react";

const sharebutton = () => {
  return (
    <>
      <div
        class="fb-share-button"
        data-href="https://insync-8f4e4.web.app/"
        data-layout="button_count"
        data-size="large"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finsync-8f4e4.web.app%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore" rel="noreferrer"
        >
          Share
        </a>
      </div>
    </>
  );
};

export default sharebutton;
