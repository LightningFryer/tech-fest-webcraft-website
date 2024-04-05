<script>
    import Typewriter from "svelte-typewriter"
    import { inview } from "svelte-inview";
    import {SneakerMove, ShoppingCart, Copyright} from "phosphor-svelte"
    import ShoeLanding from "$lib/pictures/shoe.png"
    import shoe1 from "$lib/pictures/shoe_1.jpg"
    import shoe2 from "$lib/pictures/shoe_2.jpg"
    import shoe3 from "$lib/pictures/shoe_3.jpg"

</script>

<main class="flex flex-col h-full" data-theme="light">
    <div class="">
        <nav class="navbar border-b-2 border-black ">
            <div class="navbar-start ml-56">
                <h1 class="text-3xl font-bold">SHOESIFY</h1>
            </div>
            <div class="navbar-center"></div>
            <div class="navbar-end gap-8 mr-52">
                <button class="hover:underline">HOME</button>
                <button class="hover:underline">SHOP</button>
                <button class="hover:underline">CONTACT</button>
                <button class="hover:underline">ACCOUNT</button>
                <button class="hover:underline">ABOUT</button>
            </div>
        </nav>
    </div>

    <section class="flex flex-row h-screen">
        <div class="flex flex-col w-[50%] h-full border-r-2 items-center gap-10 border-black">
            <div class="flex flex-col w-[80%] h-[50%] mt-12 gap-7">
                <h1 class="font-bold text-7xl">Be Bold.<br><span class="text-6xl">Walk in style.</span></h1>
                <p class="text-2xl ">Get shoes that know you from the inside out with our latest comfy collection. Step into comfort and walk in style with us.</p>
                <button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Explore our shoes <SneakerMove size={28}/></button>
            </div>

            <div class="flex flex-col w-[80%] h-[25%]">
                <div class="stats shadow-xl">
                    <div class="stat">
                        <div class="stat-title">Happy Customers</div>
                        <div class="stat-value">350K+</div>
                        <div class="stat-desc">All around the world</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title">Sales</div>
                        <div class="stat-value">1M+</div>
                        <div class="stat-desc">Since 2015</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title">Collections</div>
                        <div class="stat-value">Over 15+</div>
                        <div class="stat-desc">All stitched to perfection</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex w-[50%] justify-center items-center h-full">
            <div class="flex w-[99%] h-[99%]">
                <img src={ShoeLanding} alt="shoe" />
            </div>
        </div>
    </section>

    <section class="flex flex-col h-screen justify-center items-center border-2 border-black">
        <h1 class="relative left-[-35%] top-5 text-4xl font-bold">Our Trending Picks!</h1>
        <div class="flex flex-row h-[90%] w-[90%] justify-center items-center gap-10">
            <div class="card w-96 h-[80%] bg-base-100 shadow-2xl">
                <figure><img src={shoe1} alt="shoe1"></figure>
                <div class="card-body gap-4">
                    <h2 class="card-title font-bold">Shoesify Power XL <div class="badge badge-accent">New!</div></h2>
                    <p>Our latest rendition of both power and comfort. These shoes are sure to make you comfy and condident throughout the day.</p>
                    <div class="card-actions justify-end">
                        <button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Add to cart <ShoppingCart size={18}/></button>
                    </div>
                </div>
            </div>

            <div class="card w-96 h-[80%] bg-base-100 shadow-2xl">
                <figure><img src={shoe2} alt="shoe2"></figure>
                <div class="card-body gap-4">
                    <h2 class="card-title font-bold">Shoesify Power <div class="badge badge-secondary">Top Seller!</div></h2>
                    <p>Our top selling shoe and for good reason. Can't beat the price to comfort ratio. Rated as our overall best shoe.</p>
                    <div class="card-actions justify-end">
                        <button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Add to cart <ShoppingCart size={18}/></button>
                    </div>
                </div>
            </div>

            <div class="card w-96 h-[80%] bg-base-100 shadow-2xl">
                <figure><img src={shoe3} alt="shoe3"></figure>
                <div class="card-body gap-4">
                    <h2 class="card-title font-bold">Shoesify Sport</h2>
                    <p>Great for those power packed athletic days. This shoe has soft soles which use our odour-free technology</p>
                    <div class="card-actions justify-end">
                        <button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Add to cart <ShoppingCart size={18}/></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="flex flex-row justify-evenly p-8">
        <div class="flex flex-col justify-center">
            <h1 class="flex flex-row justify-center items-center gap-1 font-bold text-4xl">SHOESIFY <Copyright /></h1>
            <p>Step into comfort.</p>
        </div>
        <div class="">
            <h1 class="font-semibold text-xl">Links</h1>
            <p class="hover:underline cursor-pointer">Youtube</p>
            <p class="hover:underline cursor-pointer">Twitter</p>
            <p class="hover:underline cursor-pointer">Store</p>
            <p class="hover:underline cursor-pointer">Legal</p>
        </div>
        <div class="">
            <h1 class="font-semibold text-xl">Media</h1>
            <p class="hover:underline cursor-pointer">Pictures</p>
            <p class="hover:underline cursor-pointer">Social</p>
            <p class="hover:underline cursor-pointer">Showroom</p>
        </div>
    </footer>
</main>

<style>
    /* .shoe-grid{
        justify-content: space-evenly;
        justify-items: center;
        align-content: space-evenly;
    } */
</style>