import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem"
import { LoadingCircle } from "./LoadingCircle";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <LoadingCircle />
            }
            <div className="card-grid">
                {images.map(( image ) => (
                    <GifItem
                    key={ image.id }
                    { ...image}
                    />
                ))}
            </div>
        </>
    )
}
