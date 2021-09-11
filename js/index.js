var show = document.querySelector("#show");
window.onload = function dog() {
	axios
		.get("https://dog.ceo/api/breeds/image/random")
		.then((res) => {
			show.innerHTML = "<img src=" + res.data.message + ">";
			// console.log(res)
		})
		.catch((res) => {
			console.log("error");
		});
};
