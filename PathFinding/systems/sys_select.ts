import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Transform | Has.Selectable;

export function sys_select(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let transform = game.World.Transform[entity];
    let selectable = game.World.Selectable[entity];

    if (game.Pick?.EntityId === entity) {
        // When the cursor is over the entity…

        // …highlight it
        if (!selectable.Highlighted) {
            selectable.Highlighted = true;
            transform.Scale[0] = 1.2;
            transform.Scale[1] = 1.2;
            transform.Scale[2] = 1.2;
            transform.Dirty = true;
        }

        // …select it if the user clicks.
        if (!selectable.Selected && game.InputDelta["Mouse0"] === -1) {
            selectable.Selected = true;
            game.World.Mask[entity] |= Has.ControlPlayer;

            let selection = transform.Children[0].EntityId;
            game.World.Mask[selection] |= Has.Draw;
        }
    } else {
        // When the cursor is not over the entity…

        // …remove the highlight
        if (selectable.Highlighted) {
            selectable.Highlighted = false;
            transform.Scale[0] = 1;
            transform.Scale[1] = 1;
            transform.Scale[2] = 1;
            transform.Dirty = true;
        }

        // …deselect it if the user clicks.
        if (selectable.Selected && game.InputDelta["Mouse0"] === -1) {
            selectable.Selected = false;
            game.World.Mask[entity] &= ~Has.ControlPlayer;

            let selection = transform.Children[0].EntityId;
            game.World.Mask[selection] &= ~Has.Draw;
        }
    }
}