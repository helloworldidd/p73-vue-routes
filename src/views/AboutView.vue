<script setup>

const irASection = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

</script>

<template>
    <div class="page">
        <h1>About</h1>
        <nav>
            <button class="btn" @:click="irASection('part1')">Ir a Section 1</button>
            <button class="btn" @:click="irASection('part2')">Ir a Section 2</button>
            <button class="btn" @:click="irASection('part3')">Ir a Section 3</button>
        </nav>
        <p>Lorem ipsum dolor sit amet.
        Eos quasi eveniet necessitatibus voluptatem?
        Impedit cum similique ipsam laudantium.
        Ipsum quas distinctio earum sed.
        Accusamus veniam officia soluta excepturi!
        Odio voluptate dolorum delectus? Incidunt.
        Minima odio magni beatae eveniet?
        Consequuntur doloremque architecto fugit sit.
        Beatae veritatis distinctio ea rerum!
        Aspernatur eaque tempore maxime sed.</p>


    <section id="part1" class="section section--one">
      <h2>Part 1</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>

    <section id="part2" class="section section--one">
      <h2>Part 2</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>

    <section id="part3" class="section section--one">
      <h2>Part 3</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>



    </div>
</template>

<style scoped>
.btn{
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
}
.btn:hover{
  background-color: #fff;
  color: #333;
}
.section{
  height: 700px;
  border: 10px solid #333;
  padding: 30px;
}
</style>