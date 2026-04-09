function HeroImage({ imageUrl, label }) {
  return (
    <div className="hero-image-wrap">
      <img
        src={imageUrl}
        alt={label}
        className="hero-img"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <div className="hero-label">{label}</div>
    </div>
  );
}

export default HeroImage;