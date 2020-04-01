import djezzy from '../img_conc/djezzy.jpg'
import mobilis from '../img_conc/mobilis.jpg'
import ooredoo from '../img_conc/ooredoo.jpg'

let imgs = {
    djezzy,
    ooredoo,
    mobilis
};

let getImage = (key) => imgs[key];

export default getImage;