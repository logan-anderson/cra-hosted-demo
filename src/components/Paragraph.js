import React from 'react'
import { BlocksControls, InlineTextarea } from 'react-tinacms-inline'
import '../styles/paragraph.css'

/**
 * 1. Define the Block Component
 */
function Paragraph({ index }) {
    return (
        <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
            <div className="paragraph__background">
                <div className="wrapper wrapper--narrow">
                    <p className="paragraph__text">
                        <InlineTextarea name="text" focusRing={false} />
                    </p>
                </div>
            </div>
        </BlocksControls>
    )
}

/**
 * 2. Define the Block
 */
export const paragraphBlock = {
    Component: Paragraph,
    template: {
        label: 'Paragraph',
        defaultItem: {
            text:
                'Take root and flourish quis nostrum exercitationem ullam corporis suscipit laboriosam culture Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur descended from astronomers encyclopaedia galactica? Nisi ut aliquid ex ea commodi consequatur something incredible is waiting to be known sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ',
        },
        fields: [],
    },
}