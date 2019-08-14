import {Animate} from "./com_animate";
import {AudioSource} from "./com_audio_source";
import {Camera} from "./com_camera";
import {Light} from "./com_light";
import {Named} from "./com_named";
import {Render} from "./com_render";
import {Rotate} from "./com_rotate";
import {Transform} from "./com_transform";

export const enum Get {
    Transform,
    Render,
    Camera,
    Light,
    Rotate,
    AudioSource,
    Animate,
    Named,
}

export interface ComponentData {
    [Get.Transform]: Array<Transform>;
    [Get.Render]: Array<Render>;
    [Get.Camera]: Array<Camera>;
    [Get.Light]: Array<Light>;
    [Get.Rotate]: Array<Rotate>;
    [Get.AudioSource]: Array<AudioSource>;
    [Get.Animate]: Array<Animate>;
    [Get.Named]: Array<Named>;
}
