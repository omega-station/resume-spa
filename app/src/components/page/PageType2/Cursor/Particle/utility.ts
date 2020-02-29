import Bat from './Bat';
import Bubble from './Bubble';
import Emoji from './Emoji';
import FairyDust from './FairyDust';
import Ghost from './Ghost';
import Snowflake from './Snowflake';

export type Particle = null | Bat | Bubble | Emoji | FairyDust | Ghost | Snowflake;

export const Particles: { [key: string]: any } = { bat: Bat, bubble: Bubble, emoji: Emoji, fairydust: FairyDust, ghost: Ghost, snowflake: Snowflake };
