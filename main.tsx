import { ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

export const Main = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Farm + React</h1>
			<div>
				<Button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<ExportOutlined />
				<p>
					Edit <code>src/main.tsx</code> and save to test HMR
				</p>
			</div>
			<p>Click on the Farm and React logos to learn more</p>
		</>
	);
};
