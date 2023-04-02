import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import {UserInfo} from "./UserInfo";
import { UserLoader } from "./UserLoader";

const getServerData = url=>async()=>(await axios.get(url)).data;

const getLocalStorageData = key=>()=>{
	return localStorage.getItem(key);
}

const Text = ({message})=><h1>{message}</h1>

function App() {
	return (
		<>
		<DataSource getDataFunc={getLocalStorageData("message")} resourceName={"message"}>
			<Text/>
		</DataSource>
		<DataSource getDataFunc={getServerData('/users/345')} resourceName={"user"}>
			<UserInfo/>
		</DataSource>
		
		<ResourceLoader resourceUrl="/users/345" resourceName="user">
			<UserInfo/>
		</ResourceLoader>

		<ResourceLoader resourceUrl="/products/4567" resourceName="product">
			<ProductInfo/>
		</ResourceLoader>

		</>
	);
}

export default App;
