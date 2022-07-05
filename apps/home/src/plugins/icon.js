import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faComment, faEnvelope, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

library.add([
    faCamera,
    faEnvelope,
    faPlus,
    faEllipsis,
    faHeart,
    faComment,
    faPaperPlane,
    faBookmark
])

const plugin = (app) => {
    app.component("font-awesome-icon", FontAwesomeIcon)
}

export default plugin