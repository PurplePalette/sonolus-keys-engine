import {
    HorizontalAlign,
    ScreenAspectRatio,
    Script,
    Subtract,
    UIMenu,
} from 'sonolus.js'

export function initialization(): Script {
    const preprocess = UIMenu.set(
        Subtract(0.05, ScreenAspectRatio),
        0.95,
        0,
        1,
        0.15,
        0.15,
        0,
        1,
        HorizontalAlign.Center,
        true
    )

    return {
        preprocess: {
            code: preprocess,
        },
    }
}
