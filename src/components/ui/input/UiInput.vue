<template>
    <div class="form-input">
        <input
            :type="type"
            :id="id"
            class="form-input__field"
            :class="{ 'form-input__field--error': error }"
            v-bind="$attrs"
            :value="modelValue"
            @input="onChange($event)"
        >

        <label
            :for="id"
            class="form-input__label"
            v-if="label"
        >
            {{ label }}<span v-if="required">*</span>
        </label>

        <small
            class="form-input__error"
            v-if="error"
        >
            {{ error }}
        </small>
    </div>
</template>

<script>export default { name: 'UiInput' }</script>

<script setup>
    const props = defineProps({
        id: String,
        label: String,
        type: String,
        modelValue: [String, Number],
        required: Boolean,
        error: String
    });

    const emit = defineEmits(['update:modelValue']);

    const onChange = (event) => {
        let value = event.target.value;
        if (props.type === 'number') {
            value = Number(value);
        }
        emit('update:modelValue', value);
    };
</script>

<style lang="scss">
    .form-input {
        display: flex;
        flex-direction: column;

        &__label {
            order: 0;
            margin-bottom: 5px;
            padding-left: 0px;
            @include font($dark, 16px, 24px, 400);
            cursor: pointer;
            transition: padding-left .3s, font-weight .3s;
        }

        &__field {
            order: 1;
            width: 100%;
            padding: 13px 16px;
            @include font($dark, 14px, 20px, 400);
            border: 1px solid $grey-2;
            transition: border-color .3s;

            &::placeholder {
                color: $grey-1;
            }

            &:focus {
                border-color: $grey-3;
            }

            &--error {
                border-color: red;
            }
        }

        &__error {
            order: 3;
            margin-top: 2px;
            @include font(red, 12px, 16px, 400);
        }
    }
</style>