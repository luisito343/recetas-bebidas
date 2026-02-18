import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';

export default function Modal() {

    const modal = useAppStore((state) => state.modal);
    const closeModal = useAppStore((state) => state.closeModal);
    const selectedRecipe = useAppStore((state) => state.selectedRecipe);

    const renderIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 6; i++) {
            const ingredient = selectedRecipe[`strIngredient${i}` as keyof typeof selectedRecipe];
            const measure = selectedRecipe[`strMeasure${i}` as keyof typeof selectedRecipe];
            if(ingredient) {
                ingredients.push(
                    <li key={i} className='text-lg'>
                        {measure ? `${measure} of ${ingredient}` : ingredient}
                    </li>
                );
            }
        }
        return ingredients;
    }

    return (
        <Transition show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>

                {/* Backdrop (Fondo oscuro) */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">

                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">

                                <img
                                    className='mx-auto w-96 rounded-xl shadow-md'
                                    src={selectedRecipe.strDrinkThumb}
                                    alt={`Imagen de ${selectedRecipe.strDrink}`}
                                />

                                <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                    {selectedRecipe.strDrink}
                                </DialogTitle>

                                <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                    Ingredientes y Cantidades
                                </DialogTitle>
                                <ul className='list-disc ml-5 space-y-2'>
                                    {renderIngredients()}
                                </ul>

                                <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                    Instrucciones
                                </DialogTitle>
                                <p className='text-lg leading-relaxed'>{selectedRecipe.strInstructions}</p>

                                <div className='mt-5 flex justify-between gap-4'>
                                    <button
                                        onClick={closeModal}
                                        className='w-full p-3 bg-gray-600 hover:bg-gray-700 text-white font-bold uppercase rounded-lg'
                                    >Cerrar</button>

                                    <button
                                        className='w-full p-3 bg-orange-400 hover:bg-orange-500 text-white font-bold uppercase rounded-lg'
                                    >Favoritos</button>
                                </div>

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
