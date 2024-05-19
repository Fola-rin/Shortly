import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "../../styles/Home.scss";
import axios, { AxiosError } from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import { AnimatePresence, motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Props = {};

type ApiResponseType = {
	ok: boolean;
	result: {
		full_short_link: string;
		original_link: string;
	};
};

interface LinkObjInterface {
	id: number;
	link: string;
	shortLink: string;
}

type ShortLinkWrapperType = {
	id: number | null;
	data: LinkObjInterface;
	removeItem: (id: number) => void;
};
const css = `.shorten-wrapper {
	background-image: url("/bg/bg-shorten-desktop.svg");
}

@media screen and (max-width: 450px) {
	.shorten-wrapper {
		background-image: url("/bg/bg-shorten-mobile.svg");
	}`;

const Resouces = () => {
	const [urlString, setUrlString] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [shortenedUrls, setShortenedUrls] = useState<LinkObjInterface[]>(
		localStorage.getItem("shortenedUrls")
			? JSON.parse(localStorage.getItem("shortenedUrls") || "")
			: []
	);
	const date = new Date();
	const shortenUrl = () => {
		if (loading === false) {
			setLoading(true);
			setError("");
			if (urlString) {
				axios({method: 'get',
				url: `${process.env.REACT_APP_URL}.netlify/functions/get_url?url=${urlString}`,
			})					
			.then((response) => {
				setLoading(false);
				console.log(response.data);
				const data = response.data;
				if (data.ok) {
					const id = date.getTime();
					const newData = [
						{
							id: id,
							link: urlString,
							shortLink: data.data.result_url,
						},
						...shortenedUrls,
					];
					localStorage.setItem("shortenedUrls", JSON.stringify(newData));
					setShortenedUrls(newData);
					setUrlString("");
				} else {
					setError("An Unknown error occured, please try again later");
				}
			})
			.catch((error: AxiosError<{ error: string }>) => {
				setLoading(false);
				setError(
					error.response?.data?.error
						? error.response?.data?.error
						: "An Unknown error occured, please try again later"
				);
				console.log(error);
			});
			} else {
				setLoading(false);
				setError("Please add a link");
			}
		}
	};
	const removeItem = (id: number) => {
		const newList = shortenedUrls.filter((item) => item.id !== id);
		localStorage.setItem("shortenedUrls", JSON.stringify(newList));
		setShortenedUrls(newList);
	};
	const hasRenderedListRef = useRef(false);

	useEffect(() => {
		if (shortenedUrls) {
			hasRenderedListRef.current = true;
		}
	}, [shortenedUrls]);

	console.log(shortenedUrls);

	return (
		<>
			<style>{css}</style>
			<section className="shorten-container">
				<div id="resources" className="shorten-wrapper-padding">
					<div className="shorten-wrapper">
						<form className="input-wrapper" onSubmit={(e) => {
							e.preventDefault();
							shortenUrl();
							}}>
							<div className="input">
								<input
									placeholder="Shorten a link here..."
									type="text"
									name="link"
									value={urlString}
									className={error ? `error` : ""}
									onChange={(e) => {
										setError("");
										setUrlString(e.target.value);
									}}
									readOnly={loading}
								/>
								{error ? <p>{error}</p> : ""}
							</div>
							<button className={loading ? `loading` : ""}>
								{loading ? "Shortening..." : "Shorten It!"}
							</button>
						</form>
					</div>
				</div>
				<div className="shortlink-container">
					<TransitionGroup component={"ul"}>
						{shortenedUrls.map((item, id) => (
							<CSSTransition key={item.id} timeout={250} classNames={"my-node"}>
								<ShortLinkWrapper data={item} removeItem={removeItem} id={id} />
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</section>
		</>
	);
};

export default Resouces;

const ShortLinkWrapper = ({ data, removeItem, id }: ShortLinkWrapperType) => {
	const [copied, setCopied] = useState<boolean>(false);
	return (
		<li className="shortlink-wrapper">
			<button onClick={() => removeItem(data.id)} className="x-icon">
				<CancelIcon />
			</button>
			<p className="link">{data.link}</p>
			<div>
				<p className="short-link">
					<a href={data.shortLink} target="_blank" rel="noreferrer">
						{data.shortLink}
					</a>
				</p>
				<button
					onClick={() => {
						navigator.clipboard.writeText(data.shortLink);
						setCopied(true);
						setTimeout(() => {
							setCopied(false);
						}, 1000);
					}}
					className={copied ? "copied" : ""}
				>
					{copied ? "Copied" : "Copy"}
				</button>
			</div>
		</li>
	);
};
