<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button v-b-modal.modalPopover variant="primary">Lihat Detail</b-button>

      <b-modal id="modalPopover" title="Modal with Popover" ok-only>
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            assumenda, ad nesciunt molestias pariatur neque necessitatibus
            asperiores odit error rerum nihil dicta voluptatum tenetur
            reiciendis minima eum? Perferendis facilis ipsum odio aliquid
            accusantium corporis quod, dolores ipsam quo delectus, error
            necessitatibus eum non quos dignissimos, doloribus eveniet aut
            nesciunt? Suscipit officia perspiciatis et, ipsum eligendi excepturi
            autem ab iusto error consectetur repudiandae maiores repellat ut!
            Nostrum, vel veritatis consectetur modi tenetur, facilis aliquam
            illum dolor suscipit, cumque at distinctio expedita ipsa praesentium
            in? Consequuntur porro consectetur dignissimos quae minus voluptas.
            Temporibus dolor doloribus rerum dolore exercitationem incidunt nam
            adipisci facere.
          </b-card-text>
        </b-card>
      </b-modal>
    </b-card>
  </div>
</template>
