<script>
  // Di sini kamu bisa import CSS global jika punya (misal app.css)
  // import '../app.css'; 
</script>

<slot />

<style>
  /* Reset CSS dasar agar tampilan konsisten di semua browser */
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; /* Pastikan font default kena di sini */
  }
  
  :global(*), :global(*::before), :global(*::after) {
    box-sizing: border-box;
  }
</style>