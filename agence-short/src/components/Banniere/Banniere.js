export default function Banniere() {
	return(
		<section className="relative w-full h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(to_bottom,_#FFFEFC_0%,_#867FFE_23%,_#665DFF_75%,_#FFFFFF_100%)]
    "
  />

			<div className="relative z-10 px-6 md:px-12">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">
					Bienvenue sur notre plateforme
					</h1>
					<p className="text-lg md:text-xl mb-6">
					Une solution moderne, simple et rapide pour vos projets.
					</p>
					<button className="px-6 py-3 bg-black/70 rounded-full text-white font-medium hover:bg-black transition">
					Commencer maintenant
					</button>
			</div>
		</section>
	)
}