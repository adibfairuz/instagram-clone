import { icon as iconFa } from "@fortawesome/fontawesome-svg-core";

export const FontAwesomeIcon = (p) => {
    const { icon, ...props } = p
    return (
        <div {...props} innerHTML={iconFa({ prefix: icon.split(' ')[0], iconName: icon.split(' ')[1] }).html} />
    )
}
