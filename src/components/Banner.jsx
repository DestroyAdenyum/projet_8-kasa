function Banner({ ImageSrc, BannerTitle }) {
    return (
        <div className="banner__container">
            <img className="banner__image" src={ImageSrc} alt='' />
            <h1 className="banner__title">{BannerTitle}</h1>
        </div>
    )
}

export default Banner;
