<script>
    import { onMount } from "svelte";

    var s_LedState = $state(false);


    const ledBlink = async () => {
        const switchState = s_LedState ? "on" : "off";
        // Send the LED state to the server
        const response = await fetch(`/api/led/blink?switch=${switchState}`, {
            method: "POST",
        });
        const data = await response.json();
        console.log("LED state changed:", data);
        return;
    }

    $effect(async () => {
        s_LedState;
        await ledBlink();
    });

    onMount(async() => {
        await ledBlink();
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
