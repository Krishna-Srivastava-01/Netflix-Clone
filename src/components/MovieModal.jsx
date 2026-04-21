import React from 'react'

const MovieModal = ({ movie, onClose }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`)
        .then((r) => r.json())
        .then((data) => {
            setDetails(data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
        return () => {
        document.body.style.overflow = "";
        };
    }, [movie.imdbID]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const ratingValue = details?.imdbRating && details.imdbRating !== "N/A"
        ? parseFloat(details.imdbRating)
        : null;

    const ratingStars = ratingValue ? Math.round(ratingValue / 2) : null;

  return (
    <div>
      
    </div>
  )
}

export default MovieModal
