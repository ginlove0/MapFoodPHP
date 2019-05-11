const purchaseForm = `
<form>
    <div class="form-group">
        <label for="Checkout_name">Name</label>
        <input type="text" class="form-control" id="Checkout_name" required placeholder="Email">
    </div>
    <div class="form-group">
        <label for="Checkout_address">Address</label>
        <input type="text" class="form-control" id="Checkout_address" required placeholder="Address">
    </div>
    <div class="form-group">
        <label for="Checkout_suburb">Suburb</label>
        <input type="text" class="form-control" id="Checkout_suburb" required placeholder="Suburb">
    </div>
    <div class="form-group">
        <label for="Checkout_state">State</label>
        <input type="text" class="form-control" id="Checkout_state" required placeholder="State">
    </div>
    <div class="form-group">
        <label for="Checkout_email">Email</label>
        <input type="email" class="form-control" id="Checkout_email" required placeholder="Email">
    </div>
    <div class="form-group">
        <label for="Checkout_country">Country</label>
        <input type="text" class="form-control" id="Checkout_country" required placeholder="Country">
    </div>
    <button type="submit" >Submit</button>
    <button onclick="check_out_cancle()" >Cancel Checkout</button>
</form>
`;