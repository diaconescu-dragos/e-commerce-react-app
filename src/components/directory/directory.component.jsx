import React from "react";

import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item-component";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections : [
                {
                    title: 'hats',
                    imageUrl: 'https://cdn.pixabay.com/photo/2019/07/26/06/13/girl-4364022_960_720.jpg',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/06/21/37/people-2596613_960_720.jpg',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://cdn.pixabay.com/photo/2017/10/07/06/39/fashion-2825637_960_720.jpg',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://cdn.pixabay.com/photo/2021/03/03/10/35/man-6065000_960_720.jpg',
                    id: 5,
                    size: 'large'
                }
              ]
            
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))
                }
            </div>
        )
            }
}

export default Directory;