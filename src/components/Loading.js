import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loading = () => (
	<Segment>
		<Dimmer active>
			<Loader />
		</Dimmer>

		<Image src='/images/wireframe/short-paragraph.png' alt='Loading...' />
	</Segment>
);

export default Loading;
