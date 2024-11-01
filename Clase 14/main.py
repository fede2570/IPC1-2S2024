class Nodo:
    def __init__(self, numero):
        self.numero = numero
        self.next = None

class LinkedList:

    def __init__(self):
        self.head = None
        self.last = None
    
    def insertar(self, numero):
        nuevoNodo = Nodo(numero)

        if self.head == None:
            self.head = nuevoNodo
            self.last = nuevoNodo
        else:
            self.last.next = nuevoNodo
            self.last = nuevoNodo
    
    def mostrar(self):
        aux = self.head

        while aux != None:
            print(aux.numero, end="->")
            aux = aux.next

lista = LinkedList()
lista.insertar(1)
lista.insertar(2)
lista.insertar(3)
lista.insertar(4)
lista.mostrar()