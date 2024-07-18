import { createElement } from "react"; 

export function UserFavoriteFoods() {
    return createElement(
        `section`, 
        null, 
        <div>
            <span>Favorite Foods:</span>
            <br />
            <ul>
                <li>Sushi</li>
                <li>Pizza</li>
                <li>Mediterrania</li>
            </ul>
        </div>
        )
}