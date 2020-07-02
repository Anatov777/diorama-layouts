import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  const photos = props.images.map(x => ({
    src: "/images/" + x,
    width: 1,
    height: 1,
  }));


  // const photos = [
  //   {
  //     src: props.images[0],
  //     width: 1,
  //     height: 1
  //   },
  //   {
  //     src: "/images/castle.jpg",
  //     width: 1,
  //     height: 1
  //   },
  //   {
  //     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  //     width: 1,
  //     height: 1
  //   },
  //   {
  //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  //     width: 4,
  //     height: 3
  //   }
  // ];
  

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PhotoGallery;
