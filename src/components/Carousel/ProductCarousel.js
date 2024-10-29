import React from 'react';
// import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { Embla, EmblaViewport, EmblaContainer, EmblaSlide, EmblaSlideContent, EmblaSlideImage, EmblaControls, EmblaButtons } from './CarouselStyle';

export const ProductCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <Embla
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <EmblaViewport ref={emblaRef}>
      <EmblaContainer>
          {slides.map((slide, index) => (
            <EmblaSlide key={index}>
              <EmblaSlideContent>
              <EmblaSlideImage
                src={slide.imageUrl}
                alt={slide.title}
              />
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </EmblaSlideContent>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>

      <EmblaControls>
        <EmblaButtons>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </EmblaButtons>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </EmblaControls>
    </Embla>
  )
}