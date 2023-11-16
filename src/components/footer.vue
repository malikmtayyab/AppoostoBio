<template>
  <footer class="footer">
    <BContainer fluid>
      <BRow>
        <BCol col sm="6">
          <BRow>
            <BCol style="width: 10px" class="p-0 w" sm="1">
              <router-link to="/faqs">
                <i
                  class="mdi mdi-information-outline text-muted align-middle me-1"
                ></i>
              </router-link>
            </BCol>
            <BCol> {{ new Date().getFullYear() }} @ Cocoon Web Tech srl. </BCol>
          </BRow>
        </BCol>
        <BCol col sm="6">
          <div class="text-sm-end d-none d-sm-block">
            Design & Develop Cocoon Web Tech srl
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>
