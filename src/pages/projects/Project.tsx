import React from "react";
import { withNavigationContext, IFullPage } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Content from "../../components/content/content";
import Section from "../../components/section/section";
import Page from "../../components/page/page";
import Mouse from "../../components/mouse/mouse"

export default withNavigationContext(({ fullpage }: IFullPage) => {
    return (
        <Page>
            <Section wrapper={false} backgroundColor="#4158b4">
                <Content
                    main={
                        <Lettering
                            title="PAGE-TWO"
                            text={[
                                "This is multiple section page, scroll down to view more content."
                            ]}
                        />
                    }
                    action={<Mouse />}
                />
            </Section>
            <Section backgroundColor="#617be3">
                <Lettering
                    title="PAGE-SECTION"
                    text={["This is a continued page section."]}
                />
            </Section>
        </Page>
    )

});
