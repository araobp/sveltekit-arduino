<script>
    var s_LedState = $state(false);

    $effect(() => {
        const switchState = s_LedState ? "on" : "off";
        // Send the LED state to the server
        fetch(`/api/led/blink?switch=${switchState}`, {
            method: "POST",
        });
    });
</script>

<div class="form-check form-switch mt-3">
    <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="LedSwitch"
        bind:checked={s_LedState}
    />
    <label class="form-check-label" for="LedSwitch"
        >LED</label
    >
</div>
