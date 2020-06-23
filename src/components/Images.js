import React from 'react'
import { BlocksControls, InlineImage } from 'react-tinacms-inline'
import '../styles/images.css'

/**
 * 1. Define the Block Component
 */
function Images({ index }) {
    return (
        <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
            <div className="wrapper">
                <div className="image-diptych">
                    <InlineImage
                        name="left.src"
                        parse={filename => `${filename}`}
                        uploadDir={() => '/'}
                        previewSrc={formValues => `/cra-hosted-demo/${formValues.blocks[index].left.src}`}
                        focusRing={false}
                    />
                    <InlineImage
                        name="right.src"
                        parse={filename => `/${filename}`}
                        uploadDir={() => '/'}
                        previewSrc={formValues => `/cra-hosted-demo/${formValues.blocks[index].right.src}`}
                        focusRing={false}
                    />
                </div>
            </div>
        </BlocksControls>
    )
}

/**
 * 2. Define the Block with
 *  the Template and Component
 */
export const imagesBlock = {
    Component: Images,
    template: {
        label: 'Image Diptych',
        defaultItem: {
            _template: 'images',
            left: {
                src: '/ivan-bandura-unsplash-square.jpg',
                alt: 'ocean',
            },
            right: {
                src: '/martin-sanchez-unsplash-square.jpg',
                alt: 'dunes',
            },
        },
        fields: [
            {
                name: 'left.src',
                label: 'Left-Hand Image',
                component: 'image',
                parse: filename => `/${filename}`,
                uploadDir: () => '/',
                previewSrc: (formValues, input) => {
                    /**
                     * Get index from field input. Assumes the block
                     * is only one level deep
                     */
                    const index = input.field.name.split('.')[1]
                    /**
                     * Use that index to target the correct
                     * block in `formValues`
                     */
                    const currentBlockImage = `/cra-hosted-demo/${formValues.blocks[index].left.src}`
                    return currentBlockImage
                },
                focusRing: false,
            },
            {
                name: 'left.alt',
                label: 'Left-Hand Image Alt Text',
                component: 'text',
            },
            {
                name: 'right.src',
                label: 'Right-Hand Image',
                component: 'image',
                parse: filename => `/${filename}`,
                uploadDir: () => '/',
                previewSrc: (formValues, input) => {
                    const index = input.field.name.split('.')[1]
                    const currentBlockImage = `/cra-hosted-demo/${formValues.blocks[index].right.src}`
                    return currentBlockImage
                },
                focusRing: false,
            },
            {
                name: 'right.alt',
                label: 'Right-Hand Image Alt Text',
                component: 'text',
            },
        ],
    },
}